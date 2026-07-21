CREATE TABLE "form_view_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"form_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "form_view_events" 
ADD CONSTRAINT "form_view_events_form_id_forms_id_fk"
FOREIGN KEY ("form_id")
REFERENCES "public"."forms"("id")
ON DELETE cascade ON UPDATE no action;