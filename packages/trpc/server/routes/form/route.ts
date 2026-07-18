import { z } from "zod";
import { authenticatedProcedure, publicProcedure, router } from "../../trpc";
import { generatePath } from "../../utils/path-generator";
import { formService, formFieldService, formSubmissionService } from "../../services";
import {
    createFormInputModel, createFormOutputModel, listFormsOutputModel,
    createFieldInputModel, createFieldOutputModel,
    updateFieldInputModel, updateFieldOutputModel,
    deleteFieldInputModel, deleteFieldOutputModel,
    getFieldsInputModel, getFieldsOutputModel,
    getFormInputModel, getFormOutputModel,
    updatePublishStatusInputModel, updatePublishStatusOutputModel,
    submitFormInputModel, submitFormOutputModel,
    getFormSubmissionsInputModel, getFormSubmissionsOutputModel,
    updateFieldOrderInputModel,updateFieldOrderOutputModel,
} from "./model";

const TAGS = ["Form"];
const getPath = generatePath("/form");

export const formRouter = router({
    createForm: authenticatedProcedure.meta({
        openapi: {
            method: 'POST',
            path: getPath('/createForm'),
            tags: TAGS,
            protect: true
        }
    })
        .input(createFormInputModel)
        .output(createFormOutputModel)
        .mutation(async ({ input, ctx }) => {
            const { title, description } = input

            const { id } = await formService.createForm({
                title,
                description,
                createdBy: ctx.user.id,
            })

            return { id }
        }),

    listForms: authenticatedProcedure.meta({
        openapi: {
            method: 'POST',
            path: getPath('/listForms'),
            tags: TAGS,
            protect: true,
        }
    })
        .input(z.undefined())
        .output(listFormsOutputModel)
        .query(async ({ ctx }) => {
            const forms = await formService.listFormsByUserId({ userId: ctx.user.id })
            return forms
        }),


    getFields: authenticatedProcedure.meta({
        openapi: {
            method: 'POST',
            path: getPath('/getFields'),
            tags: TAGS,
            protect: true,
        }
    })
        .input(getFieldsInputModel)
        .output(getFieldsOutputModel)
        .query(async ({ input }) => {
            return formFieldService.getFields({ formId: input.formId })
        }),

    createField: authenticatedProcedure.meta({
        openapi: {
            method: 'POST',
            path: getPath('/createField'),
            tags: TAGS,
            protect: true,
        }
    })
        .input(createFieldInputModel)
        .output(createFieldOutputModel)
        .mutation(async ({ input }) => {
            return formFieldService.createField(input)
        }),

    updateField: authenticatedProcedure.meta({
        openapi: {
            method: 'POST',
            path: getPath('/updateField'),
            tags: TAGS,
            protect: true,
        }
    })
        .input(updateFieldInputModel)
        .output(updateFieldOutputModel)
        .mutation(async ({ input }) => {
            return formFieldService.updateField(input)
        }),

    deleteField: authenticatedProcedure.meta({
        openapi: {
            method: 'POST',
            path: getPath('/deleteField'),
            tags: TAGS,
            protect: true,
        }
    })
        .input(deleteFieldInputModel)
        .output(deleteFieldOutputModel)
        .mutation(async ({ input }) => {
            return formFieldService.deleteField(input)
        }),


    updateFieldOrder: authenticatedProcedure
  .meta({
    openapi: {
      method: "POST",
      path: getPath("/updateFieldOrder"),
      tags: TAGS,
      protect: true,
    },
  })
  .input(updateFieldOrderInputModel)
  .output(updateFieldOrderOutputModel)
  .mutation(async ({ input }) => {
    return formFieldService.updateFieldOrder(input);
  }),


    getForm: publicProcedure.meta({
        openapi: {
            method: 'GET',
            path: getPath('/getForm'),
            tags: TAGS,
        }
    })
        .input(getFormInputModel)
        .output(getFormOutputModel)
        .query(async ({ input }) => {
            return formService.getFormById({ formId: input.formId })
        }),
    updatePublishStatus: authenticatedProcedure.meta({
        openapi: {
            method: 'POST',
            path: getPath('/updatePublishStatus'),
            tags: TAGS,
            protect: true,
        }
    })
    .input(updatePublishStatusInputModel)
    .output(updatePublishStatusOutputModel)
    .mutation(async ({ input }) => {
        return formService.updatePublishStatus(input)
    }),
    submitForm: publicProcedure.meta({
        openapi: {
            method: 'POST',
            path: getPath('/submitForm'),
            tags: TAGS,
        }
    })
        .input(submitFormInputModel)
        .output(submitFormOutputModel)
        .mutation(async ({ input }) => {
            return formSubmissionService.submitForm(input)
        }),

    getFormSubmissions: authenticatedProcedure.meta({
        openapi: {
            method: 'GET',
            path: getPath('/getFormSubmissions'),
            tags: TAGS,
            protect: true,
        }
    })
        .input(getFormSubmissionsInputModel)
        .output(getFormSubmissionsOutputModel)
        .query(async ({ input }) => {
            return formSubmissionService.getFormSubmissions({ formId: input.formId })
        }),

    getPublishedForm: publicProcedure
    .meta({
        openapi: {
            method: "GET",
            path: getPath("/getPublishedForm"),
            tags: TAGS,
        },
    })
    .input(getFormInputModel)
    .output(getFormOutputModel.nullable())
    .query(async ({ input }) => {
        return formService.getPublishedFormById({
            formId: input.formId,
        });
    }),
})
