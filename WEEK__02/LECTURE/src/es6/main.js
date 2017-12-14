// ES6
jQuery(document).ready($ => {

    let buttons = $('button', '.toggle-radio-container');
    let active_class = 'is-loading';
    // ※ 화살표 함수 내부의 this는 무엇을 가리키나?
    let toggleRadioButton = e => {
        // console.log(this);
        // 화살표 함수 내부의 this는
        // 함수를 실행시킨 주체가 아니라,
        // 함수의 상위 영역을 참조하는 객체이다.
        // let $this = $(this);
        let $this = $(e.target);
        $this.siblings(`.${active_class}`).removeClass(active_class);
        $this.addClass(() => {
            // AJAX 특정 시간이 지나면, 상태를 윈상 복귀
            // 시뮬레이션 window.setTimeout()
            window.setTimeout(()=> $this.removeClass(active_class), 2000);
            return active_class;
        });
       
    };
    
    buttons.each((index, button) => {
        // this는 화살표 함수와 함께 사용할 때 기존과 다르게 동작한다.
        $(button).on('click', toggleRadioButton);
    });

});