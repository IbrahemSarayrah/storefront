import { setCatogery } from '../../store/product';
import { connect } from "react-redux";

import { Breadcrumbs, Link, Typography } from '@material-ui/core';


const Categories= props => {

  return (
    <Breadcrumbs elevation={3}>
      {props.categories.map((category,idx) => {
        return (
          <Link key={idx} onClick={() => props.setCatogery(category.normalizedName)}>
            <Typography component="h2"> {category.displayName} </Typography>
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

const mapStateToProps = state => ({
    categories: state.store.categories
});

const mapDispatchToProps = {setCatogery};

export default connect(mapStateToProps,mapDispatchToProps)(Categories);