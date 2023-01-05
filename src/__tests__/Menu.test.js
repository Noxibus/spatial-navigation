import { render, screen, cleanup, queryByTestId } from "@testing-library/react";
import Menu from "../components/Menu/Menu";

test("Should render MenuWrapper component", () => {
  render(<Menu />);
  const menuElement = screen.getByTestId("Menu-1");
  expect(queryByTestId("<MenuElement/>")).toBeInTheDocument();
});
