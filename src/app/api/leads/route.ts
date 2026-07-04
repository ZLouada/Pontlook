import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


const leadSchema = z.object({
  companyName: z.string().min(2).max(100),
  industry: z.string().min(2).max(50),
  employeeCount: z.string().min(1).max(20),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  jobTitle: z.string().min(2).max(100),
  email: z.string().email().max(100),
  challenges: z.array(z.string().max(100)).min(1).max(20),
  trainingType: z.string().min(1).max(50),
  deliveryMethod: z.string().min(1).max(50),
  budgetRange: z.string().min(1).max(50),
  timeline: z.string().min(1).max(50),
  expectedOutcomes: z.string().min(10).max(2000),
  additionalNotes: z.string().max(2000).optional(),
  consent: z.boolean().refine(val => val === true),
});


function sanitize(input: string) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    
    
    const validatedData = leadSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validatedData.error.issues },
        { status: 400 }
      );
    }

    const data = validatedData.data;

    
    const sanitizedExpectedOutcomes = sanitize(data.expectedOutcomes);
    const sanitizedAdditionalNotes = data.additionalNotes ? sanitize(data.additionalNotes) : "";

    
    
    console.log("Mock DB Insert:", {
      ...data,
      expectedOutcomes: sanitizedExpectedOutcomes,
      additionalNotes: sanitizedAdditionalNotes,
    });

    
    return NextResponse.json({ success: true, message: "Lead captured successfully" }, { status: 201 });

  } catch (error) {
    
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
