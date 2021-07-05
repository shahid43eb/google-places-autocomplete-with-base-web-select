import React, { FunctionComponent } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { Select,TYPE } from "baseui/select";
import './App.css';

const App : FunctionComponent = () => {
  const [inputAddress, setInputAddress] = React.useState('');
  const [address, setAddress] = React.useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="select">
            <PlacesAutocomplete
                debounce={1000}
                value={inputAddress}
                onChange={setInputAddress}
            >
                {({getInputProps, suggestions, loading})=>{
                    const {onChange} = getInputProps()
                    return(
                        <Select
                            autoFocus
                            options={suggestions.map(({ description, placeId }) => ({
                                label: description,
                                id: placeId,
                            }))}
                            value={address}
                            type={TYPE.search}
                            placeholder="Search places..."
                            isLoading={loading}
                            onInputChange={onChange}
                            onChange={({value}:any):void => setAddress(value)}
                        />
                    )
                }}
            </PlacesAutocomplete>
        </div>
      </header>
    </div>
  );
}

export default App;
