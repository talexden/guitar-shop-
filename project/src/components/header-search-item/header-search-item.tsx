import {useDispatch, useSelector} from 'react-redux';
import {FORM_SEARCH_ITEM_TAB_INDEX} from '../../common/const';
import {setCurrentGuitar} from '../../store/action';
import {getGuitars} from '../../store/app-data/selectors';


type HeaderSearchItem = {
  guitarName: string;
  guitarId: number;
}

function HeaderFormSearchItem ({guitarName, guitarId}: HeaderSearchItem): JSX.Element {
  const guitars = useSelector(getGuitars);
  const dispatch = useDispatch();
  const handleClick = () => {
    const selectedGuitar = guitars.find((guitar) => guitar.id === guitarId);
    if (selectedGuitar) {
      dispatch(setCurrentGuitar(selectedGuitar));
    }
  };

  return (
    <li
      className="form-search__select-item"
      tabIndex={FORM_SEARCH_ITEM_TAB_INDEX}
      onClick={handleClick}
    >
      {guitarName}
    </li>
  );
}

export default HeaderFormSearchItem;
