import React from 'react';
import icon from "../assets/icon.png";
import icony from "../assets/mapicon.png";
import { Link } from 'react-router-dom';
import "./SearchResult.css";
interface SearchResult {
  name: string;
  type: string;
  address: string;
  website: string;
  directions: string;
}

interface SearchResultsProps {
  results: SearchResult[];
}

const btnStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  color: '#fff ', 
};
const btntextStyle ={
  color: '#fff ', 
};

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="rresultprop">
      {results.map((result, index) => (
        <div className="ind" key={index}>

<div className="flexer">
  <div className="cyt">
          <h3>{result.name}</h3>
        Type: {result.type}<br/>
          Address: {result.address}
          </div>

          <div className="iconss">  
          <a href={result.website} target="_blank" rel="noopener noreferrer" className="blk"> <img className="myicon" alt="location" src={icon} /></a>
          <a href={result.directions} target="_blank" rel="noopener noreferrer"><img className="myicon2" alt="location" src={icony} /></a>
         </div></div>
         <button id="botn" style={btnStyle}><Link style={btntextStyle} to="/SchdeuleTime">Schedule</Link></button>

        </div>

      ))}
    </div>
  );
};

export default SearchResults;