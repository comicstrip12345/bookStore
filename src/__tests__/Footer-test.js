import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"

test('Footer Renders Successfully',()=>{
    render(<Footer/>)
    const cartElement = screen.getAllByRole('link')
    expect(cartElement).toHaveLength(4)
})