// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled, {css} from 'styled-components';

import Profile from 'src/components/profile/profile';

export const RHSContainer = styled.div`
    height: calc(100vh - 119px);
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const RHSContent = styled.div`
    flex: 1 1 auto;
    position: relative;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;

    button:only-child {
        margin-left: auto;
    }

    background: var(--center-channel-bg);
    border-top: 1px solid var(--center-channel-color-16);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    text-align: right;
    padding: 2rem;

    a {
        opacity: unset;
    }
`;

const BasicFooterButton = styled.button`
    display: block;
    border: 1px solid var(--button-bg);
    border-radius: 4px;
    background: transparent;
    font-size: 12px;
    font-weight: 600;
    line-height: 9.5px;
    color: var(--button-bg);
    text-align: center;
    padding: 10px 0;
`;

interface BasicFooterButtonProps {
    primary: boolean;
}

export const StyledFooterButton = styled(BasicFooterButton)<BasicFooterButtonProps>`
    min-width: 114px;
    height: 40px;
    ${(props: BasicFooterButtonProps) => props.primary && css`
        background: var(--button-bg);
        color: var(--button-color);
    `}`;

export function renderView(props: any): JSX.Element {
    return (
        <div
            {...props}
            className='scrollbar--view'
        />);
}

export function renderThumbHorizontal(props: any): JSX.Element {
    return (
        <div
            {...props}
            className='scrollbar--horizontal'
        />);
}

export function renderThumbVertical(props: any): JSX.Element {
    return (
        <div
            {...props}
            className='scrollbar--vertical'
        />);
}

export function renderTrackHorizontal(props: any): JSX.Element {
    return (
        <div
            {...props}
            style={{display: 'none'}}
            className='track-horizontal'
        />);
}

export const HoverMenu = styled.div`
    display: flex;
    padding: 4px;
    position: absolute;
    right: 0;
    top: -8px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.08);
    background-color: var(--center-channel-bg);
    border: 1px solid rgba(var(--center-channel-color-rgb), 0.08);
    border-radius: 4px;
    z-index: 2;
`;

export const HoverMenuButton = styled.i`
    display: inline-block;
    cursor: pointer;
    width: 28px;
    height: 28px;
    padding: 1px 0 0 1px;
`;

export const SmallerProfile = styled(Profile)`
    >.image {
        width: 20px;
        height: 20px;
    }
`;

export const UpdateBody = styled.div`
    padding-right: 6px;

    h1,h2,h3,h4,h5,h6 {
        font-size: inherit;
        font-weight: 600;
    }
`;

