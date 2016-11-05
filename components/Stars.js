import React from 'react';
import css from 'next/css';

const randomPos = () => (
  Math.floor(
    Math.random() * 100
  )
)

const style = () => ({
  star: css({
    position: 'absolute',
    top: `${randomPos()}vh`,
    left: `${randomPos()}vw`,
    opacity: '.75',
  })
})

const Stars = () => (
  <div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
    <div className={style().star}>*</div>
  </div>
)

export default Stars;
