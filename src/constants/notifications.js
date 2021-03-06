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
    listAsset,
    metamask,
    funding,
    withdrawInvestor,
    withdrawCollateral,
    withdrawManager,
    status,
  } = obj;
  if(listAsset){
    switch (status) {
      case NotificationStatus.SUCCESS:
        return {
          title: <span style={{marginRight: '10px'}}>Started crowdsale for {listAsset.assetName} successfully</span>,
          message: <span>You can find the asset listing
            <Link
              href={`/explore/${listAsset.assetId}`}
              to={`/explore/${listAsset.assetId}`}
            >
            {' '}here.
            </Link></span>,
        }
      case NotificationStatus.INFO:
        return {
          title: `Starting the crowdsale for ${listAsset.assetName}`,
          message: 'This action can take several minutes. This message will update as soon as the transaction is processed.',
        }
      case NotificationStatus.ERROR:
        return {
          title: `Failed to start the crowdsale for ${listAsset.assetName}`,
          message: 'Unfortunately your transaction failed. Please try again.',
        }
      default:
        return null;
    }
  } else if(funding){
      switch(status){
        case NotificationStatus.SUCCESS:
          return {
            title: <span style={{marginRight: '10px'}}>Contributed successfuly to {funding.assetName}</span>,
            message: (
                <React.Fragment>
                  <span >Amount contributed: <span style={{fontWeight: 600}}>{funding.amount}</span></span>
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
            title: `Contributing ${funding.amount} to ${funding.assetName}`,
            message: 'It may take several minutes for this action to be processed by the Ethereum Network. Meanwhile, you can explore the platform.',
          }
        case NotificationStatus.ERROR:
          return {
            title: `Failed to contribute to ${funding.assetName}`,
            message: 'Unfortunately your transaction failed. Please try again.',
          }
        default:
          return null;
      }
  } else if(withdrawInvestor){
      switch(status){
        case NotificationStatus.SUCCESS:
          return {
            title: <span style={{marginRight: '10px'}}>Withdrew profits from {withdrawInvestor.assetName} successfuly</span>,
            message: (
                <React.Fragment>
                  <span style={{display: 'block'}}>Amount received: <span style={{fontWeight: 600}}>{withdrawInvestor.amount}</span></span>
                  <span>Welcome to the future of investing.</span>
                </React.Fragment>
              )
          }
        case NotificationStatus.INFO:
          return {
            title: `Withdrawing profits from ${withdrawInvestor.assetName}`,
            message: 'It may take several minutes for this action to be processed by the Ethereum Network. Meanwhile, you can explore the platform.',
          }
        case NotificationStatus.ERROR:
          return {
            title: `Failed to withdraw from ${withdrawInvestor.assetName}`,
            message: 'Unfortunately your transaction failed. Please try again.',
          }
        default:
          return null;
      }
  } else if(withdrawCollateral){
      switch(status){
        case NotificationStatus.SUCCESS:
          return {
            title: <span style={{marginRight: '10px'}}>Withdrew collateral of {withdrawCollateral.assetName} successfuly</span>,
            message: (
                <React.Fragment>
                  <span style={{display: 'block'}}>Amount received: <span style={{fontWeight: 600}}>{withdrawCollateral.amount.toLocaleString('en-US')} MYB ({withdrawCollateral.percentage}%)</span></span>
                </React.Fragment>
              )
          }
        case NotificationStatus.INFO:
          return {
            title: `Withdrawing collateral of ${withdrawCollateral.assetName}`,
            message: 'It may take several minutes for this action to be processed by the Ethereum Network. Meanwhile, you can explore the platform.',
          }
        case NotificationStatus.ERROR:
          return {
            title: `Failed to withdraw the collateral from ${withdrawCollateral.assetName}`,
            message: 'Unfortunately your transaction failed. Please try again.',
          }
        default:
          return null;
      }
  } else if(withdrawManager){
      switch(status){
        case NotificationStatus.SUCCESS:
          return {
            title: <span style={{marginRight: '10px'}}>Withdrew profits of {withdrawManager.assetName} successfuly</span>,
            message: (
                <React.Fragment>
                  <span style={{display: 'block'}}>Amount received: <span style={{fontWeight: 600}}>{withdrawManager.amount}</span></span>
                </React.Fragment>
              )
          }
        case NotificationStatus.INFO:
          return {
            title: `Withdrawing profits of ${withdrawManager.assetName}`,
            message: 'It may take several minutes for this action to be processed by the Ethereum Network. Meanwhile, you can explore the platform.',
          }
        case NotificationStatus.ERROR:
          return {
            title: `Failed to withdraw profits from ${withdrawManager.assetName}`,
            message: 'Unfortunately your transaction failed. Please try again.',
          }
        default:
          return null;
      }
  } else if(metamask){
    const { operationType } = metamask;
    switch(operationType){
      case NotificationsMetamask.LIST_ASSET:
        switch(status) {
          case NotificationStatus.INFO:
            return {
              title: `Creation of crowdsale for ${metamask.assetName}`,
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
              title: `Contributing to ${metamask.assetName}`,
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
              title: `Withdrawing profits of ${metamask.assetName}`,
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
              title: `Withdrawing collateral of ${metamask.assetName}`,
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
              title: `Withdrawing profits of ${metamask.assetName}`,
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
