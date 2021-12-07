import { render, fireEvent } from "@testing-library/react";
import MemeForm from "../MemeForm";

let memeForm;

describe("<MemeForm /> basics", () => {
  beforeEach(() => {
    memeForm = render(<MemeForm />);
  });

  it("renders", () => {
    expect(memeForm).toBeTruthy();
  });
  it("matches snapshot", () => {
    expect(memeForm.asFragment()).toMatchSnapshot();
  });
});

it("updates state with topText input", () => {
  // mount form and mock addMeme
  const mockFn = jest.fn();
  const { getByText } = render(<MemeForm addMeme={mockFn} />);

  fireEvent.click(getByText("Create Meme!"));

  expect(mockFn).toHaveBeenCalled();
});
