import React from 'react';
import { connect } from 'react-redux';
import ApplicationPageLayout from '../../helper/ApplicationPageLayout'
import ApplictaionDropdown from '../../helper/ApplictaionDropdown'
import ApplictaionCheckbox from '../../helper/ApplictaionCheckbox'
import ApplicationMenuList from '../../helper/ApplicationMenuList'
import {
  onCategorySelect,
  onCheckboxClick
} from './store/dispatchers';
import './index.scss';

function Home({
  isInStock,
  dropdwonList,
  subCategoryList,
  onCategorySelect,
  selectedCategoryId,
  onCheckboxClick
}) {
  return (
    <div className='home-container'>
      <ApplicationPageLayout >
        <div className='home-container__title' >
          Welcome To Foodie Club
        </div>
        <ApplictaionDropdown 
          list = {dropdwonList} 
          defaultValue={selectedCategoryId} 
          onClick= {onCategorySelect}
        />
        <ApplictaionCheckbox onClick = {onCheckboxClick} />
        <ApplicationMenuList 
          list = {subCategoryList} 
          isChecked = {isInStock} 
          selectedCategoryId={selectedCategoryId} 
        />
      </ApplicationPageLayout>
    </div>
  );
};

const mapStateToProps = ({ home }) => {
  return {
    selectedCategoryId: home.selectedCategoryId,
    subCategoryList: home.subCategoryList,
    dropdwonList: home.categoryList,
    isInStock: home.isInStock

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCategorySelect(id){
      dispatch(onCategorySelect(id))
    },
    onCheckboxClick(value){
      dispatch ( onCheckboxClick(value))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)((Home));