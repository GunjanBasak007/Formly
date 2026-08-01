ALTER TABLE "form_view_events" DROP CONSTRAINT "form_view_events_form_id_forms_id_fk";
--> statement-breakpoint
ALTER TABLE "form_view_events" ADD CONSTRAINT "form_view_events_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;