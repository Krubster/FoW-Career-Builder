import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../css/components/Home.module.css';

import { fetchCareers } from '../actions/actionCareers';
import { resetLevel } from '../actions/actionLevel';
import { resetRenown } from '../actions/actionRenown';
import { resetTacticLimit } from '../actions/actionTacticLimit';
import { resetPoints } from '../actions/actionPoints';
import { resetCurrentPoints } from '../actions/actionCurrentPoints';
import { resetAbilities } from '../actions/actionAbilities';
import { resetSelectedMorale1 } from '../actions/actionSelectedMorale1';
import { resetSelectedMorale2 } from '../actions/actionSelectedMorale2';
import { resetSelectedMorale3 } from '../actions/actionSelectedMorale3';
import { resetSelectedMorale4 } from '../actions/actionSelectedMorale4';
import { resetSelectedTactics } from '../actions/actionSelectedTactics';
import { resetMasteryAbilities } from '../actions/actionMasteryAbilities';
import { resetMasteryMorales } from '../actions/actionMasteryMorales';
import { resetMasteryTactics } from '../actions/actionMasteryTactics';
import { resetPathMeterA } from '../actions/actionPathMeterA';
import { resetPathMeterB } from '../actions/actionPathMeterB';
import { resetPathMeterC } from '../actions/actionPathMeterC';

import Masthead from './Masthead';
import Sidebar from './Sidebar';
import Overlay from './Overlay';
import News from '../components/News';

type Props = typeof mapDispatchToProps;

class Home extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchCareers();

    // Reset career selections/attributes/abilities
    this.props.resetLevel();
    this.props.resetRenown();
    this.props.resetTacticLimit();
    this.props.resetPoints();
    this.props.resetCurrentPoints();
    this.props.resetAbilities();
    this.props.resetSelectedMorale1();
    this.props.resetSelectedMorale2();
    this.props.resetSelectedMorale3();
    this.props.resetSelectedMorale4();
    this.props.resetSelectedTactics();
    this.props.resetMasteryAbilities();
    this.props.resetMasteryMorales();
    this.props.resetMasteryTactics();
    this.props.resetPathMeterA();
    this.props.resetPathMeterB();
    this.props.resetPathMeterC();
  }

  render() {
    const copyClass = classNames({
      [css.copy]: true,
      'marginBottom--large': true,
      'marginTop@mobile': true,
      'marginTop--medium': true,
      marginRight: true,
      'marginLeft@mobile': true,
    });
    return (
      <div className="heightFull">
        <div className={css.wrapper}>
          <div className={css.container}>
            <Masthead />
            <div className="grid">
              <div className="grid-col-1-3 grid-col-1@mobile">
                <div className="marginTop--medium marginTop@mobile marginLeft--medium marginLeft@mobile marginRight--medium marginRight@mobile marginBottom--medium marginBottom--none@mobile">
                  <News />
                </div>
              </div>
              <div className="grid-col-2-3 grid-col-1@mobile">
                <div className={copyClass}>
                  <p className={css.copyText}>
                    Developed and updated by{' '}
                    <a
                      className={css.copyLink}
                      href="http://uogames.org"
                      target="blank"
                    >
                      UOGames team
                    </a>
                    .
                  </p>
                  <p className={css.copyText}>
                    Current game patch present: 1.4.8
                  </p>
                  <p className={css.copyText}>
                    Details of updates will appear on this page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Overlay overlayVisible />
        <Sidebar />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCareers,
  resetRenown,
  resetLevel,
  resetTacticLimit,
  resetPoints,
  resetCurrentPoints,
  resetAbilities,
  resetSelectedMorale1,
  resetSelectedMorale2,
  resetSelectedMorale3,
  resetSelectedMorale4,
  resetSelectedTactics,
  resetMasteryAbilities,
  resetMasteryMorales,
  resetMasteryTactics,
  resetPathMeterA,
  resetPathMeterB,
  resetPathMeterC,
};

export default connect(undefined, mapDispatchToProps)(Home);
