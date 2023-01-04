//asset component gets focused
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Asset from "../components/Content/Asset/Asset";

//passes
test("asset can be rendered", () => {
  render();
});

//Arrange : navigate using spatial navigation virtually
//Act move between assets
//Assert that an asset can be focused
//TODO: FIX THIS LOGIC
describe("<Asset/> test", () => {
  it("can be focused", () => {
    const isFocusedProps = { ...Asset.props, focused: true };
    const focusWrapper = render(Asset);
    jest.expect(focusWrapper.isFocused);
  });
});
