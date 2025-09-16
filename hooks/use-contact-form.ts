"use client";

import { useState, useCallback, useMemo } from "react";

import {
  ContactFormData,
  ContactFormErrors,
  UseContactFormReturn,
} from "@/components/contact/types";
import { validateField, validateForm, hasErrors } from "@/lib/utils";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touchedFields, setTouchedFields] = useState<
    Set<keyof ContactFormData>
  >(new Set());

  const handleInputChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));

      // Real-time validation for touched fields
      if (touchedFields.has(field)) {
        const fieldError = validateField(field, value);

        setErrors((prev) => ({
          ...prev,
          [field]: fieldError,
        }));
      }
    },
    [touchedFields],
  );

  const validateFieldAndMarkTouched = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setTouchedFields((prev) => new Set(prev).add(field));
      const fieldError = validateField(field, value);

      setErrors((prev) => ({
        ...prev,
        [field]: fieldError,
      }));

      return fieldError;
    },
    [],
  );

  const handleSubmit = useCallback(
    async (
      onSubmit: (data: ContactFormData) => Promise<void>,
    ): Promise<void> => {
      // Validate entire form
      const formErrors = validateForm(formData);

      setErrors(formErrors);

      // Mark all fields as touched
      setTouchedFields(
        new Set(Object.keys(formData) as Array<keyof ContactFormData>),
      );

      if (!hasErrors(formErrors)) {
        await onSubmit(formData);
      }
    },
    [formData],
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setTouchedFields(new Set());
  }, []);

  const isValid = useMemo(() => {
    const formErrors = validateForm(formData);

    return !hasErrors(formErrors);
  }, [formData]);

  return {
    formData,
    errors,
    isValid,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateField: validateFieldAndMarkTouched,
  };
};
