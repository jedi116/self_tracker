This is a next.js  application called Kaizen aimed at being a self-improvement tool.



Dev notes.

 - To run locally use npx yarn dev
 - Don't use primsa migrations since the migrations folder only contains initialization script
 - The workflow for updating schema is:
   - add the sql script to migrations
   - run the script and update the schema
   - run `npx prisma db pull` to update the schema.prisma file.
   - run `npx prisma generate` to update the primsa api