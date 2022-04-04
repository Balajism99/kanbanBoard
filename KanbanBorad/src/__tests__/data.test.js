import { fireEvent, render } from "@testing-library/react";
import App from "../App";
import Header from "../Headers";
import { renderHook } from "@testing-library/react-hooks";
import { act, createRenderer } from "react-dom/test-utils";
import { columnView } from "../datas/column";
import { useCallback, useState } from "react";
import PDF from "../preview/toPdf";
import renderer from "react-test-renderer"


/*test("by data test id", () =>{
    const input=render(<Header />)
const element = screen.getAllByTestId('board')

})*/

it("renders main app",()=>{
    render(<App />)
})

it("renders main header",()=>{
    render(<Header />)
})


describe("hook",()=>{
it('renders default text', () => {
  const { container } = render(<App/>)
container.querySelector('Name')
});
})


describe("custom hook tests", ()=>{
    function validateError(){
        const [error, setError]=useState('')
        
    const valid =" CANDIDATE MUST GO THROUGH EACH AND EVERY LEVELS, CANNOT SKIP AHEAD ";
    const validBack =" CANNOT DRAG BACKWARDS ";

    const validerr =useCallback(() => setError(valid));
    const validBackerr =useCallback(() => setError(validBack));
    return{error, validerr, validBackerr}
    }
    test('should update front error', () => {
        const { result } = renderHook(() => validateError())
  
        act(() => result.current.validerr())
  
        expect(result.current.error).toBe(" CANDIDATE MUST GO THROUGH EACH AND EVERY LEVELS, CANNOT SKIP AHEAD ")
      });

      test('should update front error', () => {
        const { result } = renderHook(() => validateError())
  
        act(() => result.current.validBackerr())
  
        expect(result.current.error).toBe(" CANNOT DRAG BACKWARDS ")
      })
})
describe("custom hook tests 2", ()=>{
    function updateColumn(){
        const [column, setColumn]=useState(columnView)
    const valid =column
    const upd= useCallback(()=> setColumn(valid))
    return{column, upd}
        }
        
    test('should update hook', () => {
        const { result } = renderHook(() => updateColumn())
  
        act(() => result.current.upd())
  
        expect(result.current.column)
      })
})

it("renders pdf",()=>{
    render(<PDF />)
})


test("should be able to preview pdf", () =>{
    const mockFn = jest.fn();
    const {getByTestId} =render(<PDF handleSubmit={mockFn} />);
    const button = getByTestId("btn");
    fireEvent.submit(button);

    expect(mockFn).toHaveBeenCalledTimes(0);
})

test("function testing",()=>{
    function generatePreview(){
        var doc = new jsPDF("l", "pt", "a1")
        doc.html(document.querySelector("#content"),{
          callback : function(pdf){
            pdf.save("mypdf.pdf")
          },
        })
      }
    expect(generatePreview)
})

it ("matches snapshot", ()=>{
const tree= renderer.create(<App />);
expect(tree).toMatchSnapshot();
})