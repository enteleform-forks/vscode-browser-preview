import * as React from 'react';
import './toolbar.css';

import UrlInput from '../url-input/url-input';
import DeviceSettings from '../device-settings/device-settings';

interface IToolbarProps {
  canGoBack: boolean;
  canGoForward: boolean;
  isInspectEnabled: boolean;
  isDeviceEmulationEnabled: boolean;
  url: string;
  viewport: any;
  onActionInvoked: (action: string, data?: object) => Promise<any>;
}

class Toolbar extends React.Component<IToolbarProps, any> {
  private viewportMetadata: any;

  constructor(props: any) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
    this.handleForward = this.handleForward.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleInspect = this.handleInspect.bind(this);
    this.handleEmulateDevice = this.handleEmulateDevice.bind(this);
    this.handleDeviceChange = this.handleDeviceChange.bind(this);
    this.handleViewportSizeChange = this.handleViewportSizeChange.bind(this);
  }

  public render() {
    this.viewportMetadata = this.props.viewport;

    return (
      <div className="toolbar">
        <div className="inner">
          <button className={`inspect ` + (this.props.isInspectEnabled ? `active` : ``)} onClick={this.handleInspect}>
            <svg viewBox="0 0 160 160">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="inspect" transform="translate(-24.000000, -24.000000)">
                  <polygon id="path346" opacity="0.5" points="0 0 196 0 196 196 0 196" />
                  <path
                    id="path348"
                    fill="currentColor"
                    fill-rule="nonzero"
                    d="M73.5,171.5 L42.875,171.5 C30.625,171.5 24.5,165.375 24.5,153.125 L24.5,42.875 C24.5,30.625 30.625,24.5 42.875,24.5 L153.125,24.5 C171.5,24.5 171.5,42.48055 171.5,42.875 L171.5,73.5 L159.25,73.5 L159.25,36.75 L36.75,36.75 L36.75,159.25 L73.5,159.25 L73.5,171.5 Z M183.75,110.25 L147,134.75 L183.75,171.5 L171.5,183.75 L134.75,147 L110.25,183.75 L85.75,85.75 L183.75,110.25 Z"
                  />
                </g>
              </g>
            </svg>
          </button>
          <button
            className={`device ` + (this.props.isDeviceEmulationEnabled ? `active` : ``)}
            onClick={this.handleEmulateDevice}
          >
            <svg viewBox="0 0 15 16">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="phone" fill="currentColor" fill-rule="nonzero">
                  <path
                    id="path382"
                    d="M3,1 L3,5.0001 L3,6.0002 L6.3434,6.53135 L6.3278,14.57815 L5,14.99998 C5.006,15.59276 5.43931,16.01138 6,15.99998 L14,15.99998 C14.57896,16.00198 14.98177,15.5729 15,14.99998 L15,0.99998 C14.9898,0.46521 14.51823,0.00259 14,-2e-05 L4,-2e-05 C3.46703,0.00798 3.00284,0.45675 3,0.99998 L3,1 Z M3.99995,1 L14,1 L14,15 L6,15 L6.71845,14.57821 L6.81215,6.15641 L3.99995,6.00031 L3.99995,5.00038 L3.99995,1 Z"
                  />
                  <path
                    id="path384"
                    d="M0,6 L0,15 C0.006,15.59278 0.43931,16.0114 1,16 L6,16 C6.57896,16.002 6.98177,15.57292 7,15 L7,6 C6.9898,5.46523 6.51823,5.00261 6,5 L1,5 C0.46703,5.008 0.00284,5.45677 0,6 Z M1,7.0002 L6,7.0002 L6,14.0002 L1,14.0002 L1,7.0002 Z"
                  />
                </g>
              </g>
            </svg>
          </button>
          <button className="backward" onClick={this.handleBack} disabled={this.props.canGoBack}>
            <svg viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"
              />
            </svg>
          </button>
          <button className="forward" onClick={this.handleForward} disabled={this.props.canGoForward}>
            <svg viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"
              />
            </svg>
          </button>
          <button className="refresh" onClick={this.handleRefresh}>
            <svg viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"
              />
            </svg>
          </button>
          <UrlInput
            url={this.props.url}
            onUrlChanged={this.handleUrlChange}
            onActionInvoked={this.props.onActionInvoked}
          />
        </div>
        <DeviceSettings
          viewportMetadata={this.viewportMetadata}
          isVisible={this.props.isDeviceEmulationEnabled}
          onDeviceChange={this.handleDeviceChange}
          onViewportSizeChange={this.handleViewportSizeChange}
        />
      </div>
    );
  }

  private handleUrlChange(url: string) {
    this.props.onActionInvoked('urlChange', { url });
  }

  private handleBack() {
    this.props.onActionInvoked('backward', {});
  }

  private handleForward() {
    this.props.onActionInvoked('forward', {});
  }

  private handleRefresh() {
    this.props.onActionInvoked('refresh', {});
  }

  private handleInspect() {
    this.props.onActionInvoked('inspect', {});
  }

  private handleEmulateDevice() {
    this.props.onActionInvoked('emulateDevice', {});
  }

  private handleViewportSizeChange(viewportSize: any) {
    this.props.onActionInvoked('viewportSizeChange', {
      height: viewportSize.height,
      width: viewportSize.width
    });
  }

  private handleDeviceChange(device: any) {
    this.props.onActionInvoked('viewportDeviceChange', {
      device: device
    });
  }
}

export default Toolbar;
