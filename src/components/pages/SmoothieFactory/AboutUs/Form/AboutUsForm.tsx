'use client';

import { string, object } from 'yup';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  Form,
  FormTitle,
  Paper,
  InputWrapper,
  TextAreaInput,
  Polygon,
  FormBg,
  Error,
  ImageWrapper,
} from './AboutUsForm.style';

import { validatePhoneNumber } from '@utils/validatePhoneNumber';

import type { FC, FormEventHandler } from 'react';
import type { FieldValues } from 'react-hook-form';

import SuccessfulSubmit from '../../OrangeLeaf/common/SuccessfulSubmit/SuccessfulSubmit';

import { Label, Input } from '../../OrangeLeaf/EClub/EClubSection/EClubSection.style';

import { FormButton } from '../../EClub/Form/Form.style';

import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

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

const AboutUsForm: FC = () => {
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
        <ImageWrapper>
          <FloatingImage
            alt="letters"
            height="clamp(133px,11.70vw, 177px)"
            src="/images/Group 112.png"
            width="clamp(134px,11.83vw, 179px)"
          />
        </ImageWrapper>
        <Image alt="bg" src="/images/about-us-form-bg.jpg" style={{ objectFit: 'cover' }} fill />
        <Paper>
          <FormTitle>Contact us.</FormTitle>
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
                <Label htmlFor="message">Add your message:</Label>
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
                  Send
                </FormButton>
              </InputWrapper>
            </Form>
          )}
        </Paper>
      </FormBg>
      <Polygon />
    </>
  );
};

export default AboutUsForm;
