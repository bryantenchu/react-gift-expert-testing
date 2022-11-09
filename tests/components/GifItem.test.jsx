const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe("Pruebas en <GifItem/>", () => {
  const title = "Saitama";
  const url = "https://onepunch.com/sai.jpg";
  test("debe de hacer match con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo del componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title));
  });
});
