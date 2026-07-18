import { z } from 'zod'

export const createFormInput = z.object({
    title: z.string().max(55).describe('Title of the form'),
    description: z.string().max(300).optional().describe('Description of the form'),
    createdBy: z.string().uuid().describe('UUID of the user creating the form'),
})

export type CreateFormInputType = z.infer<typeof createFormInput>

export const listFormsByUserIdInput = z.object({
    userId: z.string().uuid().describe('UUID of the user'),
})

export type ListFormsByUserIdInputType = z.infer<typeof listFormsByUserIdInput>

export const getFormByIdInput = z.object({
    formId: z.string().uuid().describe('UUID of the form'),
})

export const updatePublishStatusInput = z.object({
    formId: z.string().uuid().describe("UUID of the form"),
    isPublished: z.boolean().describe("Publish status"),
})

export type UpdatePublishStatusInputType = z.infer<
    typeof updatePublishStatusInput
>

export type GetFormByIdInputType = z.infer<typeof getFormByIdInput>


// Drag & Drop Features
export const updateFieldOrderItemInput = z.object({
    id: z.string().uuid().describe("UUID of the field"),
    index: z.number().int().nonnegative().describe("New position of the field"),
});

export const updateFieldOrderInput = z.object({
    fields: z.array(updateFieldOrderItemInput),
});

export type UpdateFieldOrderInputType = z.infer<typeof updateFieldOrderInput>;
