'use client';

import { string, object } from 'yup';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Form, FormTitle, Paper, InputWrapper, TextAreaInput, FormBg, Error } from './AboutUsForm.style';

import { validatePhoneNumber } from '@utils/validatePhoneNumber';

import type { FC, FormEventHandler } from 'react';
import type { FieldValues } from 'react-hook-form';

import SuccessfulSubmit from '../../OrangeLeaf/common/SuccessfulSubmit/SuccessfulSubmit';

import { Label, Input } from '../../OrangeLeaf/EClub/EClubSection/EClubSection.style';

import { FormButton } from '../../EClub/Form/Form.style';
import { AboutUsFormSlice } from 'prismicio-types';

const schema = object({
  email: string().email('Add a valid email').required('This field is obligatory'),
  firstName: string().required('This field is obligatory'),
  lastName: string().required('This field is obligatory'),
  message: string().required('This field is obligatory'),
  phone: string().required('This field is obligatory').test({
    message: 'Add a valid phone number',
    name: 'valid',
    test: validatePhoneNumber,
  }),
}).required();

type AboutUsFormData = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
};

const AboutUsForm: FC<{ slice: AboutUsFormSlice }> = ({
  slice: {
    primary: { title },
  },
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<AboutUsFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (formData: FieldValues) => {
      setIsDisabled(true);

      try {
        await fetch('/api/about-us', {
          body: JSON.stringify(formData),
          method: 'post',
        });
        setIsSubmitted(true);
        reset();
        // eslint-disable-next-line no-empty
      } catch (e: unknown) {
      } finally {
        setIsDisabled(false);
      }
    },
    [reset],
  );

  return (
    <>
      <FormBg>
        <Image alt="bg" src="/images/image 66 (1).jpg" style={{ objectFit: 'cover' }} fill />
        <Paper>
          <FormTitle dangerouslySetInnerHTML={{ __html: title as string }}></FormTitle>
          {isSubmitted ? (
            <SuccessfulSubmit />
          ) : (
            <Form onSubmit={handleSubmit(onSubmit) as FormEventHandler}>
              <InputWrapper>
                <Label htmlFor="firstName">Your first name*:</Label>
                <Input
                  data-has-error={Boolean(errors.firstName)}
                  id="firstName"
                  placeholder="First Name"
                  {...register('firstName', { required: true })}
                  disabled={isDisabled}
                />
                {errors.firstName && <Error>{errors.firstName.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="lastName">Your last name*:</Label>
                <Input
                  data-has-error={Boolean(errors.lastName)}
                  id="lastName"
                  placeholder="Last Name"
                  {...register('lastName', { required: true })}
                  disabled={isDisabled}
                />
                {errors.lastName && <Error>{errors.lastName.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="email">Your email*:</Label>
                <Input
                  data-has-error={Boolean(errors.email)}
                  id="email"
                  placeholder="example@email.com"
                  {...register('email', { required: true })}
                  disabled={isDisabled}
                />
                {errors.email && <Error>{errors.email.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="phone">Your phone number*:</Label>
                <Input
                  data-has-error={Boolean(errors.phone)}
                  id="phone"
                  placeholder="Phone Number"
                  {...register('phone', { required: true })}
                  disabled={isDisabled}
                />
                {errors.phone && <Error>{errors.phone.message}</Error>}
              </InputWrapper>
              <InputWrapper stretch>
                <Label htmlFor="message">Your message:</Label>
                <TextAreaInput
                  data-has-error={Boolean(errors.message)}
                  id="message"
                  placeholder="Add your message here."
                  {...register('message', { required: true })}
                  disabled={isDisabled}
                />
                {errors.message && <Error>{errors.message.message}</Error>}
              </InputWrapper>
              <InputWrapper>
                <FormButton disabled={isDisabled} type="submit">
                  Submit
                </FormButton>
              </InputWrapper>
            </Form>
          )}
        </Paper>
      </FormBg>
    </>
  );
};

export default AboutUsForm;
