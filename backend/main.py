from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import resend
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

resend.api_key = os.getenv("RESEND_API_KEY")


class ContactForm(BaseModel):
    name: str
    email: str
    message: str


@app.post("/send-email")
async def send_email(data: ContactForm):

    try:

        params = {
            "from": "onboarding@resend.dev",

            "to": ["shreyasonpavane.18@gmail.com"],

            "subject": f"Portfolio Contact from {data.name}",

            "html": f"""
                <h2>New Portfolio Message</h2>

                <p><strong>Name:</strong> {data.name}</p>

                <p><strong>Email:</strong> {data.email}</p>

                <p><strong>Message:</strong></p>

                <p>{data.message}</p>
            """
        }

        email = resend.Emails.send(params)

        return {
            "success": True,
            "data": email
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }