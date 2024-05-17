import "./Table.css";
import { type Card } from "../../types";
import { ReactElement, useRef, useEffect} from "react";

type Props = {
  deckNumbers: 3 | 4
  children: ReactElement<Card>[]
  setTableWidth: (tableWidth:number) => void
};


export function Table({deckNumbers, children, setTableWidth }: Props) {

    const tableRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handlerTableWidth(){
            if (tableRef.current) {
                const parentRect = tableRef.current.getBoundingClientRect();
                const tableWidth = parentRect.width 

                setTableWidth(tableWidth)
            }
        }

        handlerTableWidth()

        window.addEventListener('resize', handlerTableWidth )

        return () => {
            window.removeEventListener('resize', handlerTableWidth);
          };
        }, []); 

  return (
    <section className="table-container"  >
      <div className={`table-surface decks-cards-${deckNumbers}`} ref={tableRef}>

      {children}

      </div>
    </section>
  );
}
