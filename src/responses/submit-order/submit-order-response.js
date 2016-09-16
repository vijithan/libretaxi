import CompositeResponse from '../composite-response';
import SaveOrderResponse from './save-order-response';
import InformPassengerResponse from './inform-passenger-response';

/**
 * Submit order response.
 * Composite resposnse that contains:
 * - {@link SaveOrderResponse}
 * - {@link InformPassengerResponse}
 *
 * @author Roman Pushkin (roman.pushkin@gmail.com)
 * @extends {CompositeResponse}
 * @date 2016-09-15
 * @version 1.1
 * @since 0.1.0
 */
export default class SubmitOrderResponse extends CompositeResponse {
  /**
   * Constructor.
   */
  constructor(options) {
    super();
    this.add(new SaveOrderResponse(options));
    this.add(new InformPassengerResponse(options));
  }
}
