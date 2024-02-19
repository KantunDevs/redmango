'use client';

import { string, object } from 'yup';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import SuccessfulSubmit from '@components/pages/SmoothieFactory/OrangeLeaf/common/SuccessfulSubmit/SuccessfulSubmit';

import type { FC, FormEventHandler } from 'react';
import type { FieldValues } from 'react-hook-form';

import { FormBg, Paper, Form, InputWrapper, Label, Input, Select, FormButton, Error } from './Form.style';
import { validatePhoneNumber } from '@utils/validatePhoneNumber';
import { Title } from '../common';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

type EClubFormData = {
  birthday: string;
  email: string;
  favoriteLocation: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
};

export const eClubFormSchema = object({
  birthday: string().required('This field is obligatory'),
  email: string().email('Add a valid email').required('This field is obligatory'),
  favoriteLocation: string().required('This field is obligatory'),
  firstName: string().required('This field is obligatory'),
  lastName: string().required('This field is obligatory'),
  phone: string().required('This field is obligatory').test({
    message: 'Add a valid phone number',
    name: 'valid',
    test: validatePhoneNumber,
  }),
}).required();

const FormComponent: FC<{ options: string[] }> = ({ options }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<EClubFormData>({
    resolver: yupResolver(eClubFormSchema),
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = useCallback(
    async (formData: FieldValues) => {
      setIsDisabled(true);

      try {
        const { status } = await fetch('/api/e-club', {
          body: JSON.stringify(formData),
          method: 'post',
        });

        if (status === 200) {
          setIsSubmitted(true);
          reset();
        }

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
      <FormBg id="form-bg">
        <FloatingImage
          right="16%"
          bottom="-42%"
          alt="bg"
          height="clamp(478px, 45.23vw, 684px)"
          src="/images/form-bg.svg"
          width="clamp(494px, 46.69vw, 706px)"
        />
        <Image alt="background" src="/images/image 66.jpg" style={{ objectFit: 'cover' }} fill />
        <Paper>
          {isSubmitted ? (
            <SuccessfulSubmit />
          ) : (
            <>
              <Title mb="clamp(35px,2.57vw, 39px)">#GETOFFERS</Title>
              <Form onSubmit={handleSubmit(onSubmit) as FormEventHandler}>
                <InputWrapper>
                  <Label htmlFor="firstName">Your first name*:</Label>
                  <Input
                    data-has-error={Boolean(errors.lastName)}
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
                    id="phone"
                    placeholder="Phone Number"
                    {...register('phone', { required: true })}
                    disabled={isDisabled}
                  />
                  {errors.phone && <Error>{errors.phone.message}</Error>}
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="birthday">Birthday:</Label>
                  <Input
                    id="birthday"
                    placeholder="month/day/year"
                    {...register('birthday', { required: true })}
                    disabled={isDisabled}
                  />
                  {errors.birthday && <Error>{errors.birthday.message}</Error>}
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="favoriteLocation">Favorite location:</Label>
                  <Select
                    id="favoriteLocation"
                    placeholder="Location"
                    required
                    {...register('favoriteLocation', { required: true })}
                    disabled={isDisabled}
                  >
                    <option value="" disabled hidden selected>
                      Location
                    </option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                  {errors.favoriteLocation && <Error>{errors.favoriteLocation.message}</Error>}
                </InputWrapper>
                <FormButton disabled={isDisabled} type="submit">
                  Submit
                </FormButton>
              </Form>
            </>
          )}
        </Paper>
      </FormBg>
    </>
  );
};

export default FormComponent;
