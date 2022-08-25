import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
  Box,
  useToast,
  FormErrorMessage,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMailBulk, FaCheckCircle } from "react-icons/fa";
import { Formik, Form } from "formik";

const validate = (values) => {
  // The purpose of this function is to validate all the inputs of the form

  const errors = {}; // We create an object which later we are going to add new props

  // Name validation
  if (!values.name) {
    errors.name = "Por favor ingresa un nombre.";
  } else if (values.name.length < 4 || values.name.length > 10) {
    errors.name = "Nombre deber tener entre 4 - 10 caracteres de largo.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.name = "Nombre solo puede contener letras y espacios.";
  }

  // Surname validation
  if (!values.surname) {
    errors.surname = "Por favor ingresa un apellido.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname)) {
    errors.surname = "Apellido solo puede contener letras y espacios.";
  } else if (values.surname.length < 4 || values.surname.length > 10) {
    errors.surname = "Apellido debe tener entre 4 - 10 caracteres de largo.";
  }

  // E-mail validation
  if (!values.email) {
    errors.email = "Por favor ingresa un e-mail.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Por favor ingresa una cuenta de e-mail valida.";
  }

  //Telephone validation
  if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.tel)) {
    errors.tel = "Telefono - Celular solo puede contener numeros.";
  } else if (values.tel.length <= 7 ||  values.tel.length > 10) {
    errors.tel = 'Numero de telefono - celular debe tener al menos 6 numeros y menos de 10.'
  }

  // Return an object with it's new props within
  return errors;
};

export default function HelpForm({ variant }) {
  const toast = useToast();

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        message: "",
        tel: "",
      }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        console.log(values);
        toast({
          title: "Success !",
          description: "Your message has been send successfuly.",
          status: "success",
          isClosable: true,
        });
        JSON.stringify(values);
      }}
    >
      {({ errors, handleChange, handleBlur, touched, values }) => (
        <Form>
          <VStack fontFamily="standar" spacing={6}>
            <FormControl isRequired isInvalid={touched.name && errors.name}>
              <FormLabel>Nombre:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaInfo />}></InputLeftElement>
                <Input
                  autoFocus
                  variant={variant}
                  name="name"
                  placeholder="Nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {!errors.name && (
                  <InputRightElement
                    color="green.400"
                    children={<FaCheckCircle />}
                  />
                )}
              </InputGroup>
              {touched.name && errors.name ? (
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              ) : (
                <FormHelperText>Ingresa tu nombre</FormHelperText>
              )}
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.surname && errors.surname}
            >
              <FormLabel>Apellido:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaInfo />}></InputLeftElement>
                <Input
                  variant={variant}
                  name="surname"
                  placeholder="Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
                {!errors.surname && (
                  <InputRightElement
                    color="green.400"
                    children={<FaCheckCircle />}
                  />
                )}
              </InputGroup>
              {touched.surname && errors.surname ? (
                <FormErrorMessage>{errors.surname}</FormErrorMessage>
              ) : (
                <FormHelperText>Ingresa tu apellido</FormHelperText>
              )}
            </FormControl>
            <Divider w="70%" borderColor="black" />
            <FormControl isRequired isInvalid={touched.email && errors.email}>
              <FormLabel>E-mail:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaMailBulk />}></InputLeftElement>
                <Input
                  variant={variant}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {!errors.email && (
                  <InputRightElement
                    color="green.400"
                    children={<FaCheckCircle />}
                  />
                )}
              </InputGroup>
              {touched.email && errors.email ? (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              ) : (
                <FormHelperText>Ingresa tu nombre</FormHelperText>
              )}
            </FormControl>
            <FormControl isInvalid={touched.tel && errors.tel}>
              <FormLabel>Numero de Telefono - Celular:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsTelephoneFill />} />
                <Input
                  type="tel"
                  name="tel"
                  placehoder="Numero telefono - celular..."
                  value={values.tel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant={variant}
                />
                { values.tel.length > 0 && !errors.tel && (
                  <InputRightElement
                    color="green.400"
                    children={<FaCheckCircle />}
                  />
                )}
              </InputGroup>
              {touched.tel && errors.tel ? (
                <FormErrorMessage>{errors.tel}</FormErrorMessage>
              ) : (
                <FormHelperText>
                  Su numero sera usado solo para enviarle la respuesta a su
                  mensaje.
                </FormHelperText>
              )}
            </FormControl>
            <Box
              w="100%"
              bgColor="white"
              padding={4}
              borderRadius="md"
              fontSize="md"
            >
              <Text fontWeight="semibold" marginBottom={2}>
                Tu mensaje:
              </Text>
              <Text paddingX={4}>{values.message}</Text>
            </Box>
            <Textarea
              name="message"
              onChange={handleChange}
              value={values.message}
              paddingY={3}
              paddingX={4}
              placeholder="Escribe aqui tu mensaje..."
              resize="none"
              bgColor="white"
            ></Textarea>
            <Button
              type="submit"
              variant="solid"
              colorScheme="telegram"
              boxShadow="lg"
              rightIcon={<RiSendPlaneFill />}
            >
              Enviar
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}
