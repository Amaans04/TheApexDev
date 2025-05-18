import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const formData = contactFormSchema.parse(req.body);
      
      // In a real application, you would save this to a database
      // or send an email notification
      console.log("Contact form submission:", formData);
      
      // Here you could use a service like SendGrid or Nodemailer to send an email
      
      res.status(200).json({
        success: true,
        message: "Your message has been received. We'll be in touch soon.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        success: false,
        message: "There was a problem processing your request. Please try again.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
