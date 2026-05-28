from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("PASSWORD")
print("EMAIL:", EMAIL)
print("PASSWORD EXISTS:", PASSWORD is not None)


class ContactForm(BaseModel):
    name: str
    email: str
    message: str


@app.post("/send-email")
async def send_email(data: ContactForm):

    try:
        msg = MIMEMultipart()

        msg["From"] = EMAIL
        msg["To"] = EMAIL
        msg["Subject"] = f"Portfolio Contact from {data.name}"

        body = f"""
            Name: {data.name}

            Email: {data.email}

            Message:
            {data.message}
        """

        msg.attach(MIMEText(body, "plain"))

        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)

        # server.starttls()

        server.login(EMAIL, PASSWORD)

        server.sendmail(
            EMAIL,
            EMAIL,
            msg.as_string()
        )

        server.quit()

        return {
            "success": True,
            "message": "Email sent successfully"
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }
