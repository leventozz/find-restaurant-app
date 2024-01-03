import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 4GoJkJ5B0Z6HY-0bJ-HBjcv2E2XAzDksfn2ixCkqkBPAs2LnS7qBvCcy0Br4NIFT2BpE7QA5tnrwLYJ5GwLiHCHX0jz_VKqnuICpjLiFBX4HXaq8NEus_eC3dGOVZXYx'
    }
})