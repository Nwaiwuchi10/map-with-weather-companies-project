import { ChangeEvent } from "react";
import { optionType } from "../../Data/Types/Type";
import SearchSuggestion from "./SearchSuggestion";

type Props = {
  term: string;
  options: [];

  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const InputSearch = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => (
  <section>
    <div className="relative flex mt-10 md:mt-4">
      <div>
        <input
          type="text"
          value={term}
          onChange={onInputChange}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Search for city"
        />
      </div>

      <div>
        <SearchSuggestion options={options} onSelect={onOptionSelect} />
      </div>
      <div className="d-grid gap-2">
        <button onClick={onSubmit} className="btn btn-primary form-control">
          search
        </button>
      </div>
    </div>
  </section>
);

export default InputSearch;
