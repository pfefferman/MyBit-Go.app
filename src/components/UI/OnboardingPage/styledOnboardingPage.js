import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    .ant-carousel {
        min-height: 620px;
        width: 100%;
        max-width: 620px;
        margin: 0px auto;
        overflow: hidden;
        margin-top: 20px;
        box-shadow: 1px 5px 15px 2px rgba(0,0,0,0.10);
        border-radius: 4px;
        .slick-slide {
            padding: 10px 40px;
        }
    }
`

export const Slide = styled.div`
    position: relative;
    min-height: 620px;
    width: 100%;
    max-width: 620px;
    .Onboarding__img {
        &-default {
            position: absolute;
            top: 20px;
            right: 20px;
            @media(max-width: 600px) {
                display: none !important;
            }
        }
        &-key {
            position: absolute;
            top: 40px;
            right: 20px;
            @media(max-width: 600px) {
                display: none !important;
            }
        }
        &-setup {
            position: absolute;
            top: 140px;
            right: 10px;
            @media(max-width: 600px) {
                display: none !important;
            }
        }
        &-static {
            margin: 0px auto;
            @media(max-width: 600px) {
                display: none !important;
            }
        }
    }
    .Onboarding__main-title {
        line-height: 48px;
        margin-top: 30px;
        font-size: 38px;
        font-weight: bold;
        color: #000000;
        @media(max-width: 600px) {
            font-size: 32px;
            line-height: 38px;
        }
        &--blue {
          color: #1890ff;
        }
        &--red {
          color: red;
        }
    }
    .Onboarding__paragraph-title {
        font-size: 18px;
        font-weight: bold;
        color: #4a4a4a;
        width: 80%;
        @media(max-width: 600px) {
            width: 100%;
        }
    }  
    .Onboarding__paragraph {
        font-size: 18px;
        color: #4a4a4a;
        line-height: 24px;
        width: 63%;
        @media(max-width: 600px) {
            width: 100%;
            font-size: 16px;
        }
        &--full {
            font-size: 18px;
            color: #4a4a4a;
            line-height: 24px;
            width: 100%;
            @media(max-width: 600px) {
                font-size: 16px;
            }
        }
        &--80 {
            font-size: 18px;
            color: #4a4a4a;
            line-height: 24px;
            width: 80%;
            @media(max-width: 600px) {
                font-size: 16px;
                width: 100%;
            }
        }
        &--80--mt {
            font-size: 18px;
            color: #4a4a4a;
            line-height: 24px;
            width: 80%;
            margin: 15px 0px 5px 0px;
            @media(max-width: 600px) {
                font-size: 16px;
                width: 100%;
            }
        }
    }
    .Onboarding__buttons {
        position: absolute;
        bottom: 20px;
        right: 0px;
        @media(max-width: 600px) {
            position: static;
        }
        &-next {
            font-weight: 350;
            padding-right: 8px;
            &-arrow{
                padding-top: 5px;
                padding-left: 15px;
                float: right;
            }
            @media(max-width: 600px) {
                position: static;
                display: block;
                margin: 10px auto;
            }
        }
        &-skip {
            border: none;
            color: #1890ff;
            @media(max-width: 600px) {
                position: static;
                display: block;
                margin: 10px auto;
            }
        }
        &-back {
            position: absolute;
            bottom: 20px;
            left: 0px;
            @media(max-width: 600px) {
                position: static;
                display: block;
                margin: 10px auto;
            }
        }
        &-get {
            border: none;
            text-decoration: underline;
            color: #1890ff;
            display: inline-block;
            margin-left: 5px;
            font-size: 18px;
        }
    }
    .Onboarding__list {
        padding: 0;
        list-style: none;
        margin-top: 60px;
        @media(max-width: 600px) {
            margin-top: 10px;
        }
        &.no-margin-list {
            margin-top: 10px;
        }
    }
    .Onboarding__list-item {
        margin: 5px 0px 5px 20px;
        font-size: 18px;
        position: relative;
        @media(max-width: 600px) {
        font-size: 16px;
        }
        &::before {
            content: "•"; 
            font-size: 28px;
            position: absolute;
            top: -8px;
            left: -20px;
            color: #1890ff;
        }
    }
`

export const SliderNavigation = styled.div`
    text-align: center;
    margin-top: 30px;
    width: 100%;
    .Onboarding__slider-nav-button {
        width: 12px;
        height: 12px;
        background: black;
        border-radius: 6px;
        padding: 0;
        margin: 0 4px;
        border: none;
        background: #dedede;
        &:hover, &:focus {
            background: #dedede;
        }
        &.active-slide {
            background: #1890ff;
            &:hover, &:focus {
            background: #1890ff;
            }
        }
    }
    .Onboarding__tooltip-inner {
        .ant-tooltip-content {
            box-shadow: 1px 5px 20px 2px rgba(0,0,0,0.2);
            border-radius: 4px;
        }
        .ant-tooltip-inner {
            background-color: #ffffff;
            color: #4a4a4a;
            padding: 10px;
            max-width: 200px;
        }
        .ant-tooltip-arrow {
            border-top-color: #ffffff;
        }
    }
`