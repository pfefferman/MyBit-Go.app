import React from 'react';
import { Link } from 'react-router-dom';

export const NotificationTypes = {
  METAMASK: 'metamask',
  LIST_ASSET: 'listAsset',
  FUNDING: 'funding',
  WITHDRAW_INVESTOR: 'withdrawInvestor',
  WITHDRAW_COLLATERAL: 'withdrawCollateral',
  WITHDRAW_MANAGER: 'withdrawManager',
};

export const NotificationsMetamask = {
  LIST_ASSET: 'list-asset',
  FUNDING: 'funding',
  WITHDRAW_INVESTOR: 'withdrawInvestor',
  WITHDRAW_COLLATERAL: 'withdrawCollateral',
  WITHDRAW_MANAGER: 'withdrawManager',
};

export const NotificationStatus = {
  SUCCESS: 'success',
  INFO: 'info',
  ERROR: 'error',
};

export const getContentForNotification = (obj) => {
  const {
    listAssetProps,
    metamaskProps,
    fundingProps,
    withdrawInvestorProps,
    withdrawCollateralProps,
    withdrawManagerProps,
    status,
  } = obj;
  if(listAssetProps){
    switch (status) {
      case NotificationStatus.SUCCESS:
        return {
          title: <span style={{marginRight: '10px'}}>Started crowdsale for {listAssetProps.assetName} successfully</span>,
          message: <span>You can find the asset listing
            <Link
              href={`/explore/${listAssetProps.assetId}`}
              to={`/explore/${listAssetProps.assetId}`}
            >
            {' '}here.
            </Link></span>,
        }
      case NotificationStatus.INFO:
        return {
          title: `Starting the crowdsale for ${listAssetProps.assetName}`,
          message: 'This action can take several minutes. This message will update as soon as the transaction is processed.',
        }
      case NotificationStatus.ERROR:
        return {
          title: `Failed to start the crowdsale for ${listAssetProps.assetName}`,
          message: 'Unfortunately your transaction failed. Please try again.',
        }
      default:
        return null;
    }
  } else if(fundingProps){
      switch(status){
        case NotificationStatus.SUCCESS:
          return {
            title: <span style={{marginRight: '10px'}}>Contributed successfuly to {fundingProps.assetName}</span>,
            message: (
                <React.Fragment>
                  <span >Amount contributed: <span style={{fontWeight: 600}}>{fundingProps.amount}</span></span>
                  {window.location.pathname.includes('portfolio') ? <p>{' '}</p> : (
                    <Link
                      to={'/portfolio'}
                      href={'/portfolio'}
                      style={{display: 'block', textAlign: 'right'}}
                    >
                      Go to Portfolio
                    </Link>
                    )
                  }
                </React.Fragment>
              )
          }
        case NotificationStatus.INFO:
          return {
            title: `Contributing ${fundingProps.amount} to ${fundingProps.assetName}`,
            message: 'It may take several minutes for this action to be processed by the Ethereum Network. Meanwhile, you can explore the platform.',
          }
        case NotificationStatus.ERROR:
          return {
            title: `Failed to contribute to ${fundingProps.assetName}`,
            message: 'Unfortunately your transaction failed. Please try again.',
          }
        default:
          return null;
      }
  } else if(withdrawInvestorProps){
      switch(status){
        case NotificationStatus.SUCCESS:
          return {
            title: <span style={{marginRight: '10px'}}>Withdrew profits from {withdrawInvestorProps.assetName} successfuly</span>,
            message: (
                <React.Fragment>
                  <span style={{display: 'block'}}>Amount received: <span style={{fontWeight: 600}}>{withdrawInvestorProps.amount}</span></span>
                  <span>Welcome to the future of investing.</span>
                </React.Fragment>
              )
          }
        case NotificationStatus.INFO:
          return {
            title: `Withdrawing profits from ${withdrawInvestorProps.assetName}`,
            message: 'It may take several minutes for this action to be processed by the Ethereum Network. Meanwhile, you can explore the platform.',
          }
        case NotificationStatus.ERROR:
          return {
            title: `Failed to withdraw from ${withdrawInvestorProps.assetName}`,
            message: 'Unfortunately your transaction failed. Please try again.',
          }
        default:
          return null;
      }
  } else if(withdrawCollateralProps){
      switch(status){
        case NotificationStatus.SUCCESS:
          return {
            title: <span style={{marginRight: '10px'}}>Withdrew collateral of {withdrawCollateralProps.assetName} successfuly</span>,
            message: (
                <React.Fragment>
                  <span style={{display: 'block'}}>Amount received: <span style={{fontWeight: 600}}>{withdrawCollateralProps.amount.toLocaleString('en-US')} MYB ({withdrawCollateralProps.percentage}%)</span></span>
                </React.Fragment>
              )
          }
        case NotificationStatus.INFO:
          return {
            title: `Withdrawing collateral of ${withdrawCollateralProps.assetName}`,
            message: 'It may take several minutes for this action to be processed by the Ethereum Network. Meanwhile, you can explore the platform.',
          }
        case NotificationStatus.ERROR:
          return {
            title: `Failed to withdraw the collateral from ${withdrawCollateralProps.assetName}`,
            message: 'Unfortunately your transaction failed. Please try again.',
          }
        default:
          return null;
      }
  } else if(withdrawManagerProps){
      switch(status){
        case NotificationStatus.SUCCESS:
          return {
            title: <span style={{marginRight: '10px'}}>Withdrew profits of {withdrawManagerProps.assetName} successfuly</span>,
            message: (
                <React.Fragment>
                  <span style={{display: 'block'}}>Amount received: <span style={{fontWeight: 600}}>{withdrawManagerProps.amount}</span></span>
                </React.Fragment>
              )
          }
        case NotificationStatus.INFO:
          return {
            title: `Withdrawing profits of ${withdrawManagerProps.assetName}`,
            message: 'It may take several minutes for this action to be processed by the Ethereum Network. Meanwhile, you can explore the platform.',
          }
        case NotificationStatus.ERROR:
          return {
            title: `Failed to withdraw profits from ${withdrawManagerProps.assetName}`,
            message: 'Unfortunately your transaction failed. Please try again.',
          }
        default:
          return null;
      }
  } else if(metamaskProps){
    const { operationType } = metamaskProps;
    switch(operationType){
      case NotificationsMetamask.LIST_ASSET:
        switch(status) {
          case NotificationStatus.INFO:
            return {
              title: `Creation of crowdsale for ${metamaskProps.assetName}`,
              message: 'Please confirm the transaction in Metamask to start the crowdsale. Thank you for beta testing the platform.',
            }
          case NotificationStatus.ERROR:
            return undefined;
          default:
            return null;
        }
      case NotificationsMetamask.FUNDING:
        switch(status) {
          case NotificationStatus.INFO:
            return {
              title: `Contributing to ${metamaskProps.assetName}`,
              message: 'Please confirm the transaction in Metamask to contribute to the crowdsale. Thank you for beta testing the platform.',
            }
          case NotificationStatus.ERROR:
            return undefined;
          default:
            return null;
        }
      case NotificationsMetamask.WITHDRAW_INVESTOR:
        switch(status) {
          case NotificationStatus.INFO:
            return {
              title: `Withdrawing profits of ${metamaskProps.assetName}`,
              message: 'Please confirm the transaction in Metamask to withdraw your profits. Thank you for beta testing the platform.',
            }
          case NotificationStatus.ERROR:
            return undefined;
          default:
            return null;
        }
      case NotificationsMetamask.WITHDRAW_COLLATERAL:
        switch(status) {
          case NotificationStatus.INFO:
            return {
              title: `Withdrawing collateral of ${metamaskProps.assetName}`,
              message: 'Please confirm the transaction in Metamask to withdraw your collateral. Thank you for beta testing the platform.',
            }
          case NotificationStatus.ERROR:
            return undefined;
          default:
            return null;
        }
      case NotificationsMetamask.WITHDRAW_MANAGER:
        switch(status) {
          case NotificationStatus.INFO:
            return {
              title: `Withdrawing profits of ${metamaskProps.assetName}`,
              message: 'Please confirm the transaction in Metamask to withdraw your profits. Thank you for beta testing the platform.',
            }
          case NotificationStatus.ERROR:
            return undefined;
          default:
            return null;
        }

      default:
        return null;
    }
  }
}
