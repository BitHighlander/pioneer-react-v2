import {
  Spinner,
  Stack,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  Box,
  StackDivider,
  Avatar,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
} from "@chakra-ui/react";
import { COIN_MAP_LONG } from '@pioneer-platform/pioneer-coins';
// eslint-disable-next-line import/no-extraneous-dependencies
import { usePioneer } from "lib/context/Pioneer";
// import { useState, useEffect } from "react";

const Balances = () => {
  const { state } = usePioneer();
  const { balances } = state;

  if (balances.length === 0) {
    return <Spinner />;
  }
  return (
    <Stack spacing={4}>
      {balances.map((balance: any, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card key={index}>
          <CardHeader>
            <Heading size="md">{balance.name}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box key={index}>
                <Flex
                    alignItems="center"
                    borderRadius="md"
                    border="1px solid #fff"
                    bg="black"
                    boxShadow="sm"
                    padding={2}
                >
                  <Avatar
                      size="md"
                      src={`https://pioneers.dev/coins/${COIN_MAP_LONG[balance?.chain]}.png`}
                  />
                  <Box ml={3}>
                    <Text fontSize="sm">Asset: {balance?.symbol}</Text>
                    <Text fontSize="sm">Value USD: {typeof balance?.valueUsd === 'string' ? (+balance.valueUsd).toFixed(2).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : ''}</Text>
                  </Box>
                  {/*<Button ml="auto" onClick={() => handleSelectClick(asset)} size="sm" variant="outline">*/}
                  {/*  Select*/}
                  {/*</Button>*/}
                </Flex>
              </Box>
              {/* Add more details from the balance object as needed */}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};

export default Balances;
