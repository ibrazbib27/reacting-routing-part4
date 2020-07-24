import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const PeopleFilter = (props) => {

        return(
          <DropdownButton className={props.styles} id="dropdown-basic-button" variant="outline-secondary" title="Filter Search">
  <Dropdown.Item className="w-100" href="#" onClick={()=>{props.up(true);}}>Film Appearances <FontAwesomeIcon className="ml-2" icon={faSortUp} /></Dropdown.Item>
  <Dropdown.Item className="w-100" href="#" onClick={()=>{props.down(true);}}>Film Appearances <FontAwesomeIcon className="ml-2" icon={faSortDown} /></Dropdown.Item>
  <Dropdown.Item className="w-100" href="#" onClick={()=>{props.up(false);}}>Name <FontAwesomeIcon className="ml-2" icon={faSortUp} /></Dropdown.Item>
  <Dropdown.Item className="w-100" href="#" onClick={()=>{props.down(false);}}>Name <FontAwesomeIcon className="ml-2" icon={faSortDown} /></Dropdown.Item>
</DropdownButton>
        );
    
}
export default PeopleFilter ;