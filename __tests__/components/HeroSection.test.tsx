import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";

describe("Hero Section", () => {
  it("renders the little lemon heading", () => {
    // ARRANGE
    render(<HeroSection />);
    // ACTION
    const heading = screen.getByText("Little Lemon");
    // ASSERT
    expect(heading).toBeInTheDocument();
  });
});
