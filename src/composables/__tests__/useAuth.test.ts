// // src/composables/__tests__/useAuth.test.ts
// import { useAuth } from "../useAuth";
// import axios from "axios";
// import { ref } from "vue";

// // Mock Axios
// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe("useAuth composable", () => {
//   it("should login successfully", async () => {
//     const { handleLogin, user, error } = useAuth();
//     const mockUserData = { token: "12345" };

//     // Mock a successful login response
//     mockedAxios.post.mockResolvedValueOnce({ data: mockUserData });

//     // Call login function
//     await handleLogin("test@example.com", "password");

//     // Assert user is set
//     expect(user.value).toEqual(mockUserData);
//     expect(error.value).toBeNull();
//   });

//   it("should handle login failure", async () => {
//     const { handleLogin, user, error } = useAuth();

//     // Mock a failed login response
//     mockedAxios.post.mockRejectedValueOnce(new Error("Login failed"));

//     // Call login function
//     await handleLogin("test@example.com", "wrong-password");

//     // Assert that error is set and user remains null
//     expect(user.value).toBeNull();
//     expect(error.value).toEqual("Login failed");
//   });
// });

import React from "react";

const useAuthtest = () => {
  return <>// useAuth.test</>;
};

export default useAuthtest;
