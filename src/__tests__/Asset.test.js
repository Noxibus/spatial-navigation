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

describe("<Asset/> test", () => {
  test("can be focused", () => {
    const isFocusedProps = { ...Asset.props, onFocus: true };
    const focusWrapper = render(<Asset />);
    //TODO: FIX THIS LOGIC
    expect(Asset.isFocusedProps).toBeTruthy();
  });
});

//should I check asset keys here?
