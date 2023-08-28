-- CreateTable
CREATE TABLE "auth_credentials" (
    "user_id" VARCHAR(20) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "auth_credentials_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_credentials_email_key" ON "auth_credentials"("email");
