import React, { useState, forwardRef } from 'react';
import { Star, X } from 'lucide-react';

const Modal = forwardRef((props, ref) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the data to parent component if handler exists
    if (props.onSubmit) {
      props.onSubmit({ rating, comment });
    }
    
    // Close modal
    if (ref && ref.current) {
      ref.current.close();
    }
    
    // Reset form
    setRating(0);
    setComment('');
  };

  return (
    <dialog
      ref={ref}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-600"></div>
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>

        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10">
            <X size={20} />
          </button>
        </form>

        <div className="relative z-10">
          <h3 className="font-bold text-2xl text-center mb-2 text-gray-900 dark:text-white">
            Rate Your Experience
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-sm">
            How was your experience working on this project?
          </p>

          {/* Star Rating */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none transition-all duration-200 hover:scale-110 p-1"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  <Star
                    size={36}
                    className={`${
                      star <= (hover || rating)
                        ? "fill-orange-500 text-orange-500 drop-shadow-sm"
                        : "text-gray-200 dark:text-gray-700"
                    } transition-colors duration-200`}
                  />
                </button>
              ))}
            </div>
            <span className="h-6 text-sm font-medium text-orange-600 dark:text-orange-400 transition-all duration-300">
              {hover === 1 ? "Poor" :
               hover === 2 ? "Fair" :
               hover === 3 ? "Good" :
               hover === 4 ? "Very Good" :
               hover === 5 ? "Excellent" :
               rating > 0 ? ["Poor", "Fair", "Good", "Very Good", "Excellent"][rating - 1] : ""}
            </span>
          </div>

          {/* Comment Area */}
          <div className="mb-6 group">
            <textarea
              className="w-full h-32 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none resize-none transition-all duration-200"
              placeholder="Share your feedback (optional)..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <form method="dialog" className="flex-1">
              <button className="btn w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-xl font-medium shadow-sm">
                Cancel
              </button>
            </form>
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className="flex-1 btn bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-none rounded-xl font-bold shadow-md hover:shadow-lg hover:shadow-orange-500/20 disabled:opacity-50 disabled:shadow-none transition-all duration-200"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      <form method="dialog" className="modal-backdrop">
        <button className="cursor-default">close</button>
      </form>
    </dialog>
  );
});

Modal.displayName = 'Modal';

export default Modal;
