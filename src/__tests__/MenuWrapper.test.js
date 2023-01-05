//JEST
import { render, screen, cleanup } from "@testing-library/react";
import MenuWrapper from "../components/Menu/MenuComponents/MenuWrapper";

test("Should render MenuWrapper component", () => {
  render(<MenuWrapper />);
  //   const menuWrapperElement = screen.getAllByTestId("MenuWrapper-1");
  //   expect(menuWrapperElement).toBeInTheDocument();
});
