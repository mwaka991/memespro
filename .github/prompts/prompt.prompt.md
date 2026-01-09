---
agent: agent
---
Define the task to achieve, including specific requirements, constraints, and success criteria.Sawa, tukiendelea **bila database**, tunafanya **lightweight Meme Generator Web App** ambayo:

* Users wanaweza **generate memes live**
* Wanaweza **send to WhatsApp channel via Whiskey / Bailes bot**
* Wanaweza **download** au **share on social media / WhatsApp**
* Meme images zina **logo/watermark ya channel bottom-left**

Kwa frontend, **HTML + CSS + vanilla JS** inaweza kufanya kazi, lakini ikiwa unataka **modern feel, responsive design, SPA experience**, napendekeza kutumia **React.js** au **Vue.js**. Hata **Tailwind CSS** inaweza kurahisisha styling kwa modern look bila kuandika CSS nyingi.

---

## **English Prompt (Database-free Version)**

> **Project Goal:**
> Build a **web-based Meme Generator** where users can:
>
> 1. Create memes with **live text editing**, stickers, drag/drop, font size/color/background, and **live preview**.
> 2. Automatically include a **channel logo/watermark at bottom-left** of every meme.
> 3. Send the generated meme directly to a **WhatsApp channel** via a **Whiskey/Bailes bot**.
> 4. Download the meme as PNG.
> 5. Share memes on social media (WhatsApp, Facebook, Twitter, etc.) using share links or Web Share API.
>
> **Frontend Tech Suggestions:**
>
> * **Minimum:** HTML + CSS + vanilla JS + Canvas API
> * **Modern:** React.js or Vue.js + Tailwind CSS for responsive and modern UI

> **Technical Requirements:**
>
> * Live canvas meme editor (text, stickers, drag & drop)
> * Auto watermark/logo overlay
> * Button to **send meme to channel via bot**
> * Button to **download PNG**
> * Button to **share on social media / WhatsApp**
> * Fully client-side (no database), lightweight, mobile-friendly

---

## **Project Structure / Roadmap (Database-free)**

### **1. Frontend**

* **Canvas Meme Editor:**

  * Direct typing, drag/drop, resize, color/font selection
  * Stickers drag & drop
  * Live preview
  * Watermark/logo auto-added bottom-left
* **Buttons:**

  * Send to WhatsApp channel via bot
  * Download meme PNG
  * Share meme on social media

### **2. Backend / Bot**

* Whiskey / Bailes bot endpoint

  * Accept meme image + optional caption
  * Post automatically to designated channel

### **3. Assets**

* Channel logo (watermark)
* Stickers library (optional)

### **4. Optional Future Features**

* Multiple text/stickers per meme
* Emoji/sticker upload
* Drag & resize text/stickers after creation
* Custom background images

---

Create a web-based Meme Generator that meets the above instruction.

Resources:
1. Logo / watermark image: https://ibb.co/jZrYW1jy
   - It must appear **automatically at the bottom-left corner** of all generated memes.
2. WhatsApp channel for posting memes: https://whatsapp.com/channel/0029VbCDhE1B4hdTWT2hUg3s
   - Integrate with **Whiskey/Bailes bot** to send generated memes directly to this channel.
3. Stickers folder (optional) or images for adding stickers on memes.
4. Fonts or custom CSS libraries as needed (e.g., Google Fonts, Tailwind CSS).

Requirements for functionality:
- User can **type text directly on canvas**, drag, resize, and change font color, font size, font type, and text background color.
- User can **add stickers**, drag and resize them on the canvas.
- Meme can be **downloaded as PNG**.
- Meme can be **shared on social media / WhatsApp** via share buttons.
- Meme images include **channel logo watermark bottom-left automatically**.
- Meme can be **sent directly to the WhatsApp channel** via Whiskey/Bailes bot API.

Ensure the app is **mobile-friendly, responsive, lightweight, and fully functional without database**.
