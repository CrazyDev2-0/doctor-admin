import React, { useEffect } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import PatientSearchModal from "../components/patientSearchModal";
import PatientAccessRequestModal from "../components/patientAccessRequest";

const PatientListPage = () => {
  const modalUseDisclosureForSearchModal = useDisclosure();
  const modalUseDisclosureForNewPatientModal = useDisclosure();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(5);

  const formRef = React.useRef({
    patientName: "",
    userid: "",
    filteredStudents: [],
  });

  // Change pages
  function goToAPage(pageNo) {
    // studentDatabaseManage.current.setCurrentPage(pageNo);
    // setStudents(studentDatabaseManage.current.getStudents());
    // setTotalPages(studentDatabaseManage.current.totalPages);
    // setCurrentPage(studentDatabaseManage.current.currentPage);
  }

  useEffect(() => {}, []);

  return (
    <>
      <PatientSearchModal
        disclosure={modalUseDisclosureForSearchModal}
        formRef={formRef}
        searchPatientOnClick={(e) => {}}
      />
      <PatientAccessRequestModal
        disclosure={modalUseDisclosureForNewPatientModal}
        formRef={formRef}
        requestOnClick={(e) => {}}
      />

      <div className="patientListResult">
        <div className="header">
          <p>Patient Database</p>
          <HStack>
            <Button
              onClick={modalUseDisclosureForSearchModal.onOpen}
              colorScheme="teal"
            >
              Search
            </Button>
            <Button
              onClick={modalUseDisclosureForNewPatientModal.onOpen}
              colorScheme="teal"
            >
              Add New Patient
            </Button>
          </HStack>
        </div>
        <TableContainer mt={5}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Patient Name</Th>
                <Th>Age</Th>
                <Th>Sex</Th>
                <Th>E-mail</Th>
                <Th>View Stats</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>20104589631</Td>
                <Td>Rahul Dey</Td>
                <Td>18</Td>
                <Td>F</Td>
                <Td>
                  <Button size="xs" colorScheme="teal">
                    tstest@test.com
                  </Button>
                </Td>
                <Td>
                  <Button size="xs" colorScheme="teal">
                    View Stats
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <div className="patientListResultFooter">
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <HStack width="fit-content">
            {/* <IconButton
              colorScheme="teal"
              size="sm"
              icon={<FontAwesomeIcon icon={faAnglesLeft} />}
            /> */}
            {/* <IconButton
              colorScheme="teal"
              size="sm"
              icon={<FontAwesomeIcon icon={faAngleLeft} />}
            /> */}
            {[...Array(totalPages)].map((value, index) => (
              <IconButton
                key={index}
                colorScheme="teal"
                size="sm"
                onClick={() => goToAPage(index + 1)}
                icon={<p>{(index + 1).toString()}</p>}
              />
            ))}
            {/* <IconButton
              colorScheme="teal"
              size="sm"
              icon={<FontAwesomeIcon icon={faAngleRight} />}
            /> */}
            {/* <IconButton
              colorScheme="teal"
              size="sm"
              icon={<FontAwesomeIcon icon={faAnglesRight} />}
            /> */}
          </HStack>
        </div>
      </div>
    </>
  );
};

export default PatientListPage;
