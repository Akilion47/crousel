import { useContext, useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Progress,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import {type} from "@testing-library/user-event/dist/type";

const theme = extendTheme({
  styles: {
    global: {
     
      body: {
        
         fontFamily:  "Poppins, sans-serif",
        
      },
    },
  },
});

const PersonalInformationForm = ({ onNext }) => {
  return (
    <Box bg="whitesmoke" p={8} rounded="md" color="teal.700"  boxShadow="lg">
      <Heading textAlign="center" fontWeight="semibold" mb="2%" textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)">
        Personal Information
      </Heading>
      <FormControl>
        <FormLabel htmlFor="first-name" fontWeight="semibold" color="teal.600">
          First Name
        </FormLabel>
        <Input id="first-name" placeholder="First Name" borderRadius="md"
         borderWidth="2px" 
          borderColor="teal.400"
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }}
          
          />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="last-name" fontWeight="semibold" color="teal.600">
          Last Name
        </FormLabel>
        <Input id="last-name" placeholder="Last Name" borderRadius="md"
          borderColor="teal.400"
           borderWidth="2px" 
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }}/>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="gender" fontWeight="semibold" color="teal.600">
          Gender
        </FormLabel>
        <Select id="gender" placeholder="Select Gender" borderRadius="md"
          borderColor="teal.400"
           borderWidth="2px" 
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="age" fontWeight="semibold" color="teal.600">
          Age
        </FormLabel>
        <Input id="age" type="number" placeholder="Age" borderRadius="md"
          borderColor="teal.400"
           borderWidth="2px" 
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }} />
      </FormControl>

      <Button mt="5%" colorScheme="teal" variant="solid" size ="md" onClick={onNext}>
        Next
      </Button>
    </Box>
  );
};

const AdditionalInformationForm = ({ onBack, onSubmit, onUpload }) => {
  return (
    <Box bg="whitesmoke" p={8} rounded="md" color="teal.700"  boxShadow="lg" >
      <Heading textAlign="center" fontWeight="bold" mb="2%" textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)">
        Additional Information
      </Heading>

      <FormControl mt="2%">
        <FormLabel htmlFor="blood-pressure" fontWeight="semibold" color="teal.600">
          Blood Pressure (sys/di)
        </FormLabel>
        <Input id="blood-pressure" placeholder="Blood Pressure" borderRadius="md"
          borderColor="teal.400"
           borderWidth="2px" 
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }}/>
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="weight" fontWeight="semibold" color="teal.600">
          Allergies
        </FormLabel>
        <Input id="allergies" placeholder="Allergies"  borderRadius="md"
          borderColor="teal.400"
           borderWidth="2px" 
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }}/>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="weight" fontWeight="semibold" color="teal.600">
          Weight (kg)
        </FormLabel>
        <Input id="weight" placeholder="Weight" borderRadius="md"
          borderColor="teal.400"
           borderWidth="2px" 
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }} />
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="height" fontWeight="semibold" color="teal.600">
          Height (ft.inch)
        </FormLabel>
        <Input id="height" placeholder="Height" borderRadius="md"
          borderColor="teal.400"
           borderWidth="2px" 
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }}/>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="document-upload" fontWeight="semibold" color="teal.600">
          Upload Document (PDF, up to 5MB)
        </FormLabel>
        <Input
          type="file"
          id="document-upload"
          accept=".pdf"
          onChange={onUpload} // Use the passed onUpload function
          borderRadius="md"
          borderColor="teal.400"
            borderWidth="2px" 
          _hover={{ borderColor: "teal.500" }}
          _focus={{ borderColor: "teal.600" }}
        />
      </FormControl>

      <ButtonGroup mt="5%">
        <Flex w="100%" justifyContent="space-between">
          <Button
            onClick={onBack}
            isDisabled={false}
            colorScheme="teal"
            variant="solid" size ="md" 
            w="7rem"
            mr="5%"
          >
            Back
          </Button>
          <Button
            onClick={onUpload} // Use the passed onUpload function
            colorScheme="teal"
           variant="solid" size ="md" 
           mr="5%"
            w="7rem"
          >
            Upload
          </Button>
          <Button
            onClick={onSubmit} // Use a different function for form submission
            colorScheme="teal"
           variant="solid" size ="md" 
            w="7rem"
          >
            Submit
          </Button>
        </Flex>
      </ButtonGroup>
    </Box>
  );
};

export default function Profile() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const { user } = useContext(AuthContext);

  const handleNext = () => {
    setStep(2);
    setProgress(50);
  };

  const handleBack = () => {
    setStep(1);
    setProgress(0);
  };

  const onUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);

      const uploadApiEndpoint =
          "https://insurerai-backend.azurewebsites.net/upload/uploadfile/";
      const email = user.email; // Replace with your email

      fetch(uploadApiEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          accept: "application/json",
          "email-id": email,
        },
      })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response as needed
            console.log("Document uploaded:", data);
            toast({
              title: "Document Uploaded",
              description: "Your document has been successfully uploaded.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          })
          .catch((error) => {
            // Handle errors
            console.error("Error uploading document:", error);
          });
    }}
  };

  const handleSubmit = () => {
          toast({
            title: "Data Submitted",
            description: "Your data has been submitted successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
  };


  return (
    <ChakraProvider theme={theme}>
      <Box p={4} rounded="md" color="white">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated />
        {step === 1 ? (
          <PersonalInformationForm onNext={handleNext} />
        ) : step === 2 ? (
          <AdditionalInformationForm
            onBack={handleBack}
            onUpload={onUpload} // Pass the onUpload function
            onSubmit={handleSubmit}
          />
        ) : null}
      </Box>
    </ChakraProvider>
  );
}
