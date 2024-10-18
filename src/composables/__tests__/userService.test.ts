// src/services/__tests__/userService.test.ts
import { userService } from "../userService";
import axios from "axios";

// Mock Axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("userService", () => {
  it("should fetch users successfully", async () => {
    const mockUserData = {
      data: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ],
    };

    // Mock a successful API response
    mockedAxios.get.mockResolvedValueOnce({ data: mockUserData });

    // Call the service function
    const users = await userService.fetchUsers();

    // Assert the result
    expect(users).toEqual(mockUserData);
  });

  it("should handle fetch users failure", async () => {
    // Mock a failed API request
    mockedAxios.get.mockRejectedValueOnce(new Error("API Error"));

    // Expect the function to throw an error
    await expect(userService.fetchUsers()).rejects.toThrow("API Error");
  });
});
