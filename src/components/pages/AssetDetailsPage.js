import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import 'antd/lib/button/style';

import AssetDetails from '../AssetDetails';
import '../../styles/AssetDetailsPage.css';
import NotFoundPage from './NotFoundPage';
import LoadingPage from './LoadingPage';

const AssetDetailsPage = ({
  loading, assets, match, ether, user, history,
}) => {
  if (loading.assets) {
    return (
      <LoadingPage
        message="Loading asset information"
        hasBackButton
      />
    );
  }

  const { assetId } = match.params;
  const asset = assets.find(({ assetID }) => assetID === assetId);

  if (!asset) {
    return (
      <NotFoundPage message="The desired asset could not be found. Assets previously listed may no longer exist." />
    );
  }

  return (
    <div>
      <Button onClick={history.goBack} className="AssetDetailsPage--back-btn">
        Back
      </Button>
      <AssetDetails
        currentEthInUsd={ether.price}
        user={user}
        asset={asset}
      />
    </div>
  );
};

AssetDetailsPage.defaultProps = {
  ether: undefined,
};

AssetDetailsPage.propTypes = {
  loading: PropTypes.shape({ params: PropTypes.object }).isRequired,
  assets: PropTypes.arrayOf(PropTypes.object).isRequired,
  ether: PropTypes.shape({ params: PropTypes.object }),
  match: PropTypes.shape({ params: PropTypes.object }).isRequired,
  user: PropTypes.shape({ params: PropTypes.object }).isRequired,
  history: PropTypes.shape({ params: PropTypes.object }).isRequired,
};

export default withRouter(AssetDetailsPage);
