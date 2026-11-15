# Mobile Banking & UPI App UI

A mobile-responsive web application reproducing the 5 requested screen views with interactive navigation, designed for mobile presentation and 1-click Vercel deployment.

## Features & Implemented Specifications
1. **Screen 1 (Home Screen):**
   - Profile avatar icon displays initial **"M"** (updated from "SK") with light green badge.
   - Quick action bar: "Scan any QR", "Pay Anyone", "To Bank & Self A/c", and **"Balance & History"** (interactive).
   - "Recharge & Bills" grid (Mobile Recharge, Credit Card, Electricity, FASTag).
   - Pre-approved loan card, referral banners, flight offer card.
   - Floating "Scan QR" button.

2. **Screen 2 (Balance & History Screen):**
   - Bank name updated to **"Federal Bank"** (Saving A/c: 5210) with "Check Balance" button.
   - UPI Lite and Postpaid cards.
   - Portfolio section (Gold Coins: 598, Save in Gold).
   - "Super Secure Payments with Face ID" banner.
   - November 2026 payment history with interactive action row and BMTC transaction.

3. **Screen 3 (Bank Account Details):**
   - Red header with "Help" & "Settings".
   - Federal Bank card with A/c No -5210.
   - "Check Balance" button.
   - Action buttons: "Send Money", "Receive Money", "UPI Settings".
   - Default Bank A/c indicator.
   - Transaction list (Anjali N, BMTC).

4. **Screen 4 (UPI PIN Verification Screen):**
   - UPI logo with "Federal Bank - 5210".
   - 6-digit PIN indicator dots.
   - Fully interactive on-screen numeric keypad (1-9, 0, Backspace, CHECK).
   - Supports physical keyboard typing (0-9, Backspace, Enter).

5. **Screen 5 (Balance Result Screen):**
   - Federal Bank card with updated balance: **₹75,258.98**.
   - Amount in words: **Rupees Seventy Five Thousand Two Hundred Fifty Eight And Ninety Eight Paise Only**.
   - Bank actions and transaction history below.

---

## How to Test Locally

### Option 1: Directly open in browser
Simply double-click `index.html` or open it with any web browser (Chrome, Edge, Safari).

### Option 2: Run with local server
```bash
npx serve .
```
Open `http://localhost:3000` on your desktop or phone (using local Wi-Fi IP).

---

## How to Deploy to Vercel

### Method A: Deploy via GitHub & Vercel Dashboard (Fastest)
1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of mobile banking app"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your GitHub repository.
5. Keep default settings (Framework preset: **Other** / root directory `./`).
6. Click **Deploy**. Your project will be live in 15 seconds!

### Method B: Deploy via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link and deploy directly.
