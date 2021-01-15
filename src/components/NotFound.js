import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const NotFound = props => {

  return (
    <div>
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as='h1' color='teal' textAlign='center'>Error 404: Page Not Found</Header>
      </Grid.Column>
    </Grid>
    </div>
  )
}
/*
Book.propTypes = {
  book: PropTypes.object.isRequired,
  onMoveBook: PropTypes.func.isRequired
}
*/
export default NotFound;
