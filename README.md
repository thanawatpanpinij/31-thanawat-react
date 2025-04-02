# Thinking Process

-   **Router**: เริ่มแรก ผมเริ่มจาก router ก่อนเลยครับ โดยใช้วิธีเดียวกับที่เคยทำใน session ครับ
-   **Layout.jsx**: หลังจากที่ทำ router เสร็จ ผมก็เริ่มทำ Layout ของหน้าเว็บต่อครับ ซึ่งผมมองว่าหน้าเว็บนี้มี 2 ส่วนด้วยกัน ก็คือ header และ main
-   **Navbar.jsx (header)**: ต่อมาผมเริ่มทำในส่วนของ header ต่อครับ ทำตาม design จาก figma ครับ
-   **Outlet**: หลังจากที่ทำ navbar เสร็จ ผมก็เอาใส่ไว้ใน component layout ครับ และเพิ่ม tag outlet เอาไว้ข้าล่าง ต่อจาก navbar ครับ
-   **Pages**: หลังจากที่ผมทำในส่วนของ Layout เสร็จ ต่อมาผมก็มาทำในส่วนของ page ต่างๆ ต่อครับ โดยเริ่มจากหน้า home ก่อน และต่อไปที่ user และ admin ครับ
-   **Buttons.jsx**: หลังจากที่เริ่มทำหน้า page ต่างๆ ไป ก็ทำให้ผมเห็นความซ้ำซ้อนของ ui ครับ นั้นก็คือปุ่ม "user home sector" และ "admin home sector" ครับ เมื่อเห็นแบบนี้ ผมก็เลยจัดทั้ง 2 ตัวนี้ให้ไปเป็น components ครับ เพื่อเอาไว้เรียกใช้ในแต่ละหน้าอีกที
-   **Table**: ต่อมาผมเริ่มทำ table ครับ โดยทำจาก mockup data เพื่อทำ design ก่อน ในภายหลังผมเห็นว่า table ต้องใช้ในหน้าอื่นๆ เหมือนกัน ผมก็เลยทำให้เป็น component เพื่อเอาไว้ใช้เรียกง่ายๆ ครับ
-   **Get method**: หลังจากที่ทำ table เสร็จ ผมก็เริ่มทำ get method ต่อครับ เพื่อที่จะเอาข้อมูลที่ fetch ได้มาแสดงผล ใน table ซึ่งวิธีการก็คือเริ่มจาก fetch และเก็บข้อมูลลงใน state และ update state แต่ในภายหลังนั้น เมื่อผมเห็นว่า page user และ admin ก็ต้องใช้ state เหมือนกัน ผมเลยใช้ useContext ในการเก็บ state แทนครับ เพื่อที่จะได้เรียกใช้ state ได้ง่ายๆ
-   **Delete method**: หลังจากที่ผมทำ get method เสร็จ ผมก็เริ่มทำ delete method ต่อครับ เนื่องด้วยปุ่มนี้อยู่ในหน้าของ component table และใช้เพียงที่เดียว ผมเลยเขียน function handleDelete เอาไว้ใน component นี้เลยครับ เนื่องจากวิธีการ delete ต้องส่ง id เป็น param ของ url ด้วย ผมเลยเลือกใช้ attribute dataset เพื่อเข้ามาช่วยเก็บ id ของ element ที่ถูกคลิก หลังจากนั้นก็นำไปใช้ใน method post และ filter users ใหม่ และ set state เพื่อ update หน้า front-end ใหม่ครับ
-   **Post method**: ต่อมาผมทำ method post ต่อ โดยวิธีการก็คือใช้ post method ของ axios และเนื่องด้วย method นี้ต้องการ body ด้วย ดังนั้นผมเลยใส่ข้อมูลใหม่ลงไปเป็น parameter ตัวที่ 2 และเพื่อ update หน้า front-end ผมเลยใช้ function getUser() ที่ประกาศเอาไว้ใน context ครับ
